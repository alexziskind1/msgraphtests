"use strict";
var observable_1 = require("data/observable");
var application = require("application");
var http = require("http");
var AUTHORITY = "https://login.microsoftonline.com/common";
var GRAPH_RESOURCE = "https://graph.microsoft.com/";
var CLIENT_ID = "bcbd9351-aca3-45cd-a27f-1bce4262e302";
var REDIRECT = NSURL.alloc().initWithString("urn:ietf:wg:oauth:2.0:oob");
var scopes = ["https://graph.microsoft.com/User.Read",
    "https://graph.microsoft.com/User.ReadWrite",
    "https://graph.microsoft.com/User.ReadBasic.All",
    "https://graph.microsoft.com/Mail.Send",
    "https://graph.microsoft.com/Calendars.ReadWrite",
    "https://graph.microsoft.com/Mail.ReadWrite",
    "https://graph.microsoft.com/Files.ReadWrite",
    "https://graph.microsoft.com/Directory.AccessAsUser.All",
    "https://graph.microsoft.com/User.ReadWrite.All",
    "https://graph.microsoft.com/Group.ReadWrite.All"];
var MainViewModel = (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel() {
        var _this = this;
        _super.call(this);
        this.driveItems = [];
        NXOAuth2AuthenticationProvider.setClientIdScopes(CLIENT_ID, scopes);
        var er = NSError;
        var iosApp = application.ios;
        if (NXOAuth2AuthenticationProvider.sharedAuthProvider().loginSilent()) {
            MSGraphClient.setAuthenticationProvider(NXOAuth2AuthenticationProvider.sharedAuthProvider());
            this.client = MSGraphClient.client();
        }
        else {
            NXOAuth2AuthenticationProvider.sharedAuthProvider().loginWithViewControllerCompletion(iosApp.rootController, function () {
                //if (er == null) {
                MSGraphClient.setAuthenticationProvider(NXOAuth2AuthenticationProvider.sharedAuthProvider());
                _this.client = MSGraphClient.client();
                //this.loadDriveItems();
                //this.getUserInfo();
                //}
            });
        }
    }
    MainViewModel.prototype.loadMe = function () {
        var req = this.client.me().request();
        req.getWithCompletion(function (list, req, er, o1, o2, o3, o4) {
            var a = 0;
            /*
                this.driveItems = [];
                if (list != null && list.value != null) {
                    for (var i = 0; i < list.value.count; i++) {
                        let item = list.value[i];
                        this.driveItems.push(item);
                    }
                }
                */
            //self.myTableView.reloadData();
        });
    };
    MainViewModel.prototype.loadMeHttp = function () {
        var accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kZTIwNjgwZS1kNzc5LTRlMGQtYTExYy03ZWY0NTFiMmM3MmYvIiwiaWF0IjoxNDY2NzcyNDE4LCJuYmYiOjE0NjY3NzI0MTgsImV4cCI6MTQ2Njc3NjMxOCwiYWNyIjoiMSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiJiY2JkOTM1MS1hY2EzLTQ1Y2QtYTI3Zi0xYmNlNDI2MmUzMDIiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6Ilppc2tpbmQiLCJnaXZlbl9uYW1lIjoiQWxleCIsImlwYWRkciI6IjEwOC4yOC4xMjUuMjIiLCJuYW1lIjoiQWxleCBaaXNraW5kIiwib2lkIjoiNjY0Yzc0ZDQtOGUyOC00OWQxLTliNTgtY2ViNWNmNzZmNDM4IiwicHVpZCI6IjEwMDMzRkZGOTM3OTIyRkMiLCJzY3AiOiJDYWxlbmRhcnMuUmVhZFdyaXRlIERpcmVjdG9yeS5BY2Nlc3NBc1VzZXIuQWxsIEZpbGVzLlJlYWRXcml0ZSBHcm91cC5SZWFkV3JpdGUuQWxsIE1haWwuUmVhZFdyaXRlIE1haWwuU2VuZCBVc2VyLlJlYWQgVXNlci5SZWFkQmFzaWMuQWxsIFVzZXIuUmVhZFdyaXRlIFVzZXIuUmVhZFdyaXRlLkFsbCIsInN1YiI6ImUwNGF6elZ4TXNqQ29Mc1RsbmJ6UUFkMGs2UzBibUN1MUVfeFZZbVpzRUEiLCJ0aWQiOiJkZTIwNjgwZS1kNzc5LTRlMGQtYTExYy03ZWY0NTFiMmM3MmYiLCJ1bmlxdWVfbmFtZSI6ImFsZXhAbnV2aW91czIub25taWNyb3NvZnQuY29tIiwidXBuIjoiYWxleEBudXZpb3VzMi5vbm1pY3Jvc29mdC5jb20iLCJ2ZXIiOiIxLjAifQ.Z8LcF2D-bIZ7wLB3Kjn9hFBxFa49bSsLTmMF8SWJKjo0usdSQ_q8iQ1js-UCSIithz_5NT96qlDHBDueHvRNkQqzV9buX1Mt0l8dQ-A0s-M4FSCjLFmRng4rUM3OaNiOOZHjrq_-pIR0zq4t_bk7kjWSMAZaAJ8j0Lg-U0EiGzWeDFLAPub5jtbnQJAdOrGU5kONQwkfRDec0YQwAOrsoAoVJnRWZSk9M0Qugybhd_XVciRAXAWm5l56-4-5bXx1jiVvkj3ZqHKIBBM2E_M0Giwhnh-PTtC9MjP4oAiIppG_jZpPN6LTtHW--TUdlF3EWDLf1kzVtwQ-bwmQTwvZ9Q';
        var req = {
            url: GRAPH_RESOURCE + 'v1.0/me',
            method: "GET",
            headers: {
                Authorization: "Bearer " + accessToken
            }
        };
        http.getString(req)
            .then(function (a1) {
            console.log('ok');
            console.log(a1);
        })
            .catch(function (er) {
            console.log(er);
        });
    };
    MainViewModel.prototype.loadDrive = function () {
        var req = this.client.me().drive().request();
        req.getWithCompletion(function (list, req, er, o1, o2, o3, o4) {
            var a = 0;
            /*
                this.driveItems = [];
                if (list != null && list.value != null) {
                    for (var i = 0; i < list.value.count; i++) {
                        let item = list.value[i];
                        this.driveItems.push(item);
                    }
                }
                */
            //self.myTableView.reloadData();
        });
    };
    MainViewModel.prototype.loadDriveRoot = function () {
        var req = this.client.me().drive().root().request();
        req.getWithCompletion(function (list, req, er, o1, o2, o3, o4) {
            var a = 0;
            /*
                this.driveItems = [];
                if (list != null && list.value != null) {
                    for (var i = 0; i < list.value.count; i++) {
                        let item = list.value[i];
                        this.driveItems.push(item);
                    }
                }
                */
            //self.myTableView.reloadData();
        });
    };
    MainViewModel.prototype.loadDriveRootChildren = function () {
        //let req = this.client.me().drive().root().children('').request();
        var expandStr = "children";
        var req = this.client.me().drive().root().request().expand(expandStr);
        req.getWithCompletion(function (list, req, er, o1, o2, o3, o4) {
            var a = 0;
            /*
                this.driveItems = [];
                if (list != null && list.value != null) {
                    for (var i = 0; i < list.value.count; i++) {
                        let item = list.value[i];
                        this.driveItems.push(item);
                    }
                }
                */
            //self.myTableView.reloadData();
        });
    };
    MainViewModel.prototype.loadMessages = function () {
        //let req = this.client.me().drive().root().children('').request();
        var req = this.client.me().messages('').request();
        req.getWithCompletion(function (list, req, er, o1, o2, o3, o4) {
            var a = 0;
            console.log(list);
            /*
                this.driveItems = [];
                if (list != null && list.value != null) {
                    for (var i = 0; i < list.value.count; i++) {
                        let item = list.value[i];
                        this.driveItems.push(item);
                    }
                }
                */
            //self.myTableView.reloadData();
        });
    };
    MainViewModel.prototype.getUserInfo = function () {
        var req = this.client.me().request();
        req.getWithCompletion(function (user, er) {
            var a = 0;
        });
    };
    MainViewModel.prototype.onMeTap = function () {
        console.log('me tap');
        this.loadMe();
    };
    MainViewModel.prototype.onMeHttpTap = function () {
        console.log('me http tap');
        this.loadMeHttp();
    };
    MainViewModel.prototype.onDriveTap = function () {
        console.log('drive tap');
        this.loadDrive();
    };
    MainViewModel.prototype.onDriveRootTap = function () {
        console.log('drive root tap');
        this.loadDriveRoot();
    };
    MainViewModel.prototype.onDriveRootChildrenTap = function () {
        console.log('drive root children tap');
        this.loadDriveRootChildren();
    };
    MainViewModel.prototype.onMessagesTap = function () {
        console.log('messages tap');
        this.loadMessages();
    };
    return MainViewModel;
}(observable_1.Observable));
exports.MainViewModel = MainViewModel;
//# sourceMappingURL=main-view-model.js.map