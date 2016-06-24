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
    let GRAPH_RESOURCE : String = "https://graph.microsoft.com/"
    let CLIENT_ID : String = "71fd9d5e-4e0a-4626-88bd-cdc7539db819"
    let REDIRECT : NSURL = NSURL(string: "http://MSGraphTest1")!

    
    var contacts : Array<MSGraphServiceContact> = Array<MSGraphServiceContact>()
    var mailFolders : Array<MSGraphServiceMailFolder> = Array<MSGraphServiceMailFolder>()
    var messages : Array<MSGraphServiceMessage> = Array<MSGraphServiceMessage>()
    var files : Array<MSGraphServiceDriveItem> = Array<MSGraphServiceDriveItem>();
    
    @IBOutlet weak var myTableView: UITableView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        myTableView.dataSource = self;
        
        
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
                
                /*
                client.me.contacts.readWithCallback({(list: Array<AnyObject>!, error: NSError!) -> Void in
                    self.contacts = (list as! Array<MSGraphServiceContact>)
                    self.myTableView.reloadData()
                })
*/

                client.me.drive.root.children.readWithCallback({(list: Array<AnyObject>!, error: NSError!) -> Void in
                    self.files = (list as! Array<MSGraphServiceDriveItem>)
                    self.myTableView.reloadData()
                })
                
                
            }
        })
        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        //return self.mailFolders.count;
        return self.files.count;
    }
    
    func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        //return fillCellWithContactInfo(indexPath);
        //return fillCellWithMailFolderInfo(indexPath);
        //return fillCellWithMessageInfo(indexPath);
        return fillCellWithFileInfo(indexPath);
    }
    
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
    
    func fillCellWithFileInfo(indexPath: NSIndexPath) -> UITableViewCell {
        let cell: UITableViewCell = myTableView.dequeueReusableCellWithIdentifier("dataCell", forIndexPath: indexPath)
        let file = self.files[indexPath.row]
        
        cell.textLabel?.text = file.name
        cell.detailTextLabel?.text = file.size.description
        
        return cell;
    }

}

