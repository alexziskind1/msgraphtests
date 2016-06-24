//
//  ViewController.swift
//  MSGraphTest3
//
//  Created by Alexander Ziskind on 6/18/16.
//  Copyright © 2016 Alexander Ziskind. All rights reserved.
//

import UIKit

class ViewController: UIViewController, UITableViewDataSource {

    
    let AUTHORITY : String = "https://login.microsoftonline.com/common"
    let GRAPH_RESOURCE : String = "https://graph.microsoft.com/"
    let CLIENT_ID : String = "bcbd9351-aca3-45cd-a27f-1bce4262e302"
    let REDIRECT : NSURL = NSURL(string: "urn:ietf:wg:oauth:2.0:oob")!
    
    
    var driveItems : Array<MSGraphDriveItem> = Array<MSGraphDriveItem>();
    
    @IBOutlet weak var myTableView: UITableView!
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        myTableView.dataSource = self;
        
        
        var er: ADAuthenticationError? = nil;
        let authContext: ADAuthenticationContext = ADAuthenticationContext(authority: self.AUTHORITY, error: &er);
        
        
        authContext.acquireTokenWithResource(self.GRAPH_RESOURCE, clientId: self.CLIENT_ID, redirectUri: self.REDIRECT) {
            (result: ADAuthenticationResult!) -> Void in
            if (result.accessToken == nil) {
                print("token nil")
            } else {
                print("accessToken: \(result.accessToken)");
                
                let resolver: ADALDependencyResolver = ADALDependencyResolver(context: authContext, resourceId: self.GRAPH_RESOURCE, clientId: self.CLIENT_ID, redirectUri: self.REDIRECT);
                
                
                
                self.loadFilesUsingAccessToken(result.accessToken);
            }
        }
        
    }
    
    func loadFilesUsingAccessToken(accessToken: String) {
        //self.tableView.registerClass(UITableViewCell.self, forCellReuseIdentifier: "OneDriveFile");
        
        let resolver: MSODataDefaultDependencyResolver = MSODataDefaultDependencyResolver();
        let credentials: MSODataOAuthCredentials = MSODataOAuthCredentials();
        //credentials.addToken(accessToken);
        credentials.token = accessToken;
        
        /*
        let credentialsImpl: MSODataCredentialsImpl = MSODataCredentialsImpl();
        credentialsImpl.setCredentials(credentials);
        resolver.setCredentialsFactory(credentialsImpl);
        */
        resolver.credentials = credentials;
        
        let client: MSSharePointClient = MSSharePointClient(url: resourceID + "/_api/v1.0/me", dependencyResolver: resolver);
        
        let task: NSURLSessionTask = client.getfiles().readWithCallback{(someObjects: [AnyObject]!, error: MSODataException!) -> Void in
            if (error == nil) {
                dispatch_async(dispatch_get_main_queue(), {
                    self.files = someObjects as! [MSSharePointItem];
                    self.tableView.reloadData();
                });
            } else {
                print("Error \(error)");
            }
            
        }
        task.resume();
    }
    

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    
    func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return self.files.count;
    }
    
    func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        return fillCellWithFileInfo(indexPath);
    }
    
    
    func fillCellWithFileInfo(indexPath: NSIndexPath) -> UITableViewCell {
        let cell: UITableViewCell = myTableView.dequeueReusableCellWithIdentifier("dataCell", forIndexPath: indexPath)
        let file = self.files[indexPath.row]
        
        cell.textLabel?.text = file.name
        cell.detailTextLabel?.text = file.size.description
        
        return cell;
    }


}

