//
//  ViewController.swift
//  MSGraphTest1
//
//  Created by Alexander Ziskind on 6/16/16.
//  Copyright © 2016 Alexander Ziskind. All rights reserved.
//

import UIKit


class ViewController: UIViewController, UITableViewDataSource {
    
    let AUTHORITY : String = "https://login.microsoftonline.com/common"
    //let GRAPH_RESOURCE : String = "https://graph.microsoft.com/"
    let CLIENT_ID : String = "bcbd9351-aca3-45cd-a27f-1bce4262e302"
    let REDIRECT : NSURL = NSURL(string: "urn:ietf:wg:oauth:2.0:oob")!
    
    var client : MSGraphClient = MSGraphClient()
    
    /*
    var contacts : Array<MSGraphServiceContact> = Array<MSGraphServiceContact>()
    var mailFolders : Array<MSGraphServiceMailFolder> = Array<MSGraphServiceMailFolder>()
    var messages : Array<MSGraphServiceMessage> = Array<MSGraphServiceMessage>()
    
*/
    
    var driveItems : Array<MSGraphDriveItem> = Array<MSGraphDriveItem>();
    
    @IBOutlet weak var myTableView: UITableView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        myTableView.dataSource = self;
        
        
        
        NXOAuth2AuthenticationProvider.setClientId(self.CLIENT_ID,
            scopes:[ "https://graph.microsoft.com/User.Read",
                "https://graph.microsoft.com/User.ReadWrite",
                "https://graph.microsoft.com/User.ReadBasic.All",
                "https://graph.microsoft.com/Mail.Send",
                "https://graph.microsoft.com/Calendars.ReadWrite",
                "https://graph.microsoft.com/Mail.ReadWrite",
                "https://graph.microsoft.com/Files.ReadWrite",
                "https://graph.microsoft.com/Directory.AccessAsUser.All",
                "https://graph.microsoft.com/User.ReadWrite.All",
                "https://graph.microsoft.com/Group.ReadWrite.All" ]);
        
        //MSGraphClient.setAuthenticationProvider(NXOAuth2AuthenticationProvider.self())
        
        //var er: NSError? = nil;
        
        if (NXOAuth2AuthenticationProvider.sharedAuthProvider().loginSilent() == false) {
        NXOAuth2AuthenticationProvider.sharedAuthProvider().loginWithViewController(nil) {
            (er) -> Void in
            if (er == nil) {
                
                
                
                MSGraphClient.setAuthenticationProvider(NXOAuth2AuthenticationProvider.sharedAuthProvider());
                self.client = MSGraphClient.defaultClient()
                
                //self.getUserInfo()
                
                self.loadDriveItems()
 
            }
        }
        }
    
        
        /*
        var er : ADAuthenticationError? = nil;
        let authContext : ADAuthenticationContext = ADAuthenticationContext(authority: AUTHORITY, error: &er);
        
        authContext.tokenCacheStore.removeAllWithError(&er)
        authContext.tokenCacheStore = nil
        
        authContext.acquireTokenWithResource(GRAPH_RESOURCE, clientId: CLIENT_ID, redirectUri: REDIRECT, completionBlock: {
            (result: ADAuthenticationResult!) in
            if (result.accessToken == nil) {
                print("token nil");
            }
            else {
                print("access token: " + result.accessToken)
                
                let resolver: ADALDependencyResolver = ADALDependencyResolver(context: authContext, resourceId: self.GRAPH_RESOURCE, clientId: self.CLIENT_ID, redirectUri: self.REDIRECT)
                let client: MSGraphServiceClient = MSGraphServiceClient(url: self.GRAPH_RESOURCE + "v1.0", dependencyResolver: resolver)
                
                /*
                client.me.messages.readWithCallback({(list: Array<AnyObject>!, error: NSError!) -> Void in
                self.messages = (list as! Array<MSGraphServiceMessage>)
                self.myTableView.reloadData()
                })
                */
                
                
                /*
                client.me.mailFolders.readWithCallback({(list: Array<AnyObject>!, error: NSError!) -> Void in
                self.mailFolders = (list as! Array<MSGraphServiceMailFolder>)
                self.myTableView.reloadData()
                })
                */
                
                
                client.me.contacts.readWithCallback({(list: Array<AnyObject>!, error: NSError!) -> Void in
                    self.contacts = (list as! Array<MSGraphServiceContact>)
                    self.myTableView.reloadData()
                })
                
            }
        })
*/
        
    }
    
    @IBAction func btnRefreshTap(sender: UIButton) {
        self.loadDriveItems()
        
        
    }
    
    func loadDriveItems() {
        let driveChildrenReq = self.client.me().drive().root().children().request();
        
        //driveChildrenReq = self.client.me().drive().root().request().expand("children");
        

        driveChildrenReq.getWithCompletion({
            (list:MSCollection!, req:MSGraphDriveItemChildrenCollectionRequest!, er:NSError!) -> Void in
            
            dispatch_async(dispatch_get_main_queue(),{
                
                self.driveItems.removeAll()
                
                for (var i = 0; i < list.value.count; i++) {
                    let item = list.value[i] as! MSGraphDriveItem;
                    self.driveItems.append(item);
                }
                
                self.myTableView.reloadData()
            })
            
            /*
            for (var i = 0; i < list.value.count; i++) {
                let item = list.value[i] as! MSGraphDriveItem;
                self.driveItems.append(item);
            }
            
            self.myTableView.reloadData()
            */
            
        })
    }
    
    
    func getUserInfo() {

        self.client.me().request().getWithCompletion {
            (user: MSGraphUser?, error: NSError?) in
            if let graphError = error {
                print("Error:", graphError)
                dispatch_async(dispatch_get_main_queue(),{
                    //self.statusTextView.text = "Graph Error."
                })
                
            }
            else {
                guard let userInfo = user else {
                    dispatch_async(dispatch_get_main_queue(),{
                        //self.statusTextView.text = "User information loading failed."
                    })
                    return
                }
                
                dispatch_async(dispatch_get_main_queue(),{
                    var mail = userInfo.mail;
                    var name = userInfo.displayName;
                    //self.emailTextField.text = userInfo.mail
                    //self.headerLabel.text = "Hi \(userInfo.displayName)"
                    //self.statusTextView.text = "User information loaded."
                    //self.sendButton.enabled = true
                })
                
            }
        }
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        //return self.mailFolders.count
        return self.driveItems.count
    }
    
    func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        //return UITableViewCell();
        
        //return fillCellWithContactInfo(indexPath)
        //return fillCellWithMailFolderInfo(indexPath)
        //return fillCellWithMessageInfo(indexPath)
        
        return fillCellWithDriveChildren(indexPath)
    }
    
    /*
    func fillCellWithContactInfo(indexPath: NSIndexPath) -> UITableViewCell {
        let cell: UITableViewCell = myTableView.dequeueReusableCellWithIdentifier("dataCell", forIndexPath: indexPath)
        let contact = self.contacts[indexPath.row]
        
        cell.textLabel?.text = contact.displayName
        cell.detailTextLabel?.text = contact.emailAddresses[0].address
        
        return cell;
    }
    
    func fillCellWithMailFolderInfo(indexPath: NSIndexPath) -> UITableViewCell {
        let cell: UITableViewCell = myTableView.dequeueReusableCellWithIdentifier("dataCell", forIndexPath: indexPath)
        let mailFolder = self.mailFolders[indexPath.row]
        
        cell.textLabel?.text = mailFolder.displayName
        cell.detailTextLabel?.text = mailFolder.description
        
        return cell;
    }
    
    func fillCellWithMessageInfo(indexPath: NSIndexPath) -> UITableViewCell {
        let cell: UITableViewCell = myTableView.dequeueReusableCellWithIdentifier("dataCell", forIndexPath: indexPath)
        let message = self.messages[indexPath.row]
        
        cell.textLabel?.text = message.description
        cell.detailTextLabel?.text = message.bodyPreview
        
        return cell;
    }
    
    
*/
    
    
    func fillCellWithDriveChildren(indexPath: NSIndexPath) -> UITableViewCell {
        let cell: UITableViewCell = myTableView.dequeueReusableCellWithIdentifier("dataCell", forIndexPath: indexPath)
        let item = self.driveItems[indexPath.row]
        
        cell.textLabel?.text = item.name
        //cell.detailTextLabel?.text = message.bodyPreview
        
        return cell;
    }
    
}

