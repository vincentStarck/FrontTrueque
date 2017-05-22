import { Component,OnInit } from '@angular/core';
import { GitHubService } from '../../services/github';
import { NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { Facebook } from '@ionic-native/facebook';
import { NativeStorage } from '@ionic-native/native-storage';
import { LoginPage } from '../login/login';
import { SharedService } from '../../services/sharedService';
import {User} from '../../model/User';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GitHubService,NativeStorage,Facebook]

})
export class HomePage implements OnInit {
  public foundRepos;
  public username;
  private user:User;
  ngOnInit(){
     //called after the constructor and called  after the first ngOnChanges() 
     this.user = this.sharedService.getUser();
     console.log("user recovered from sharedService: ",this.user);
  }
  constructor(private github: GitHubService,
    private nav: NavController,
    private navParams: NavParams,
    private facebook: Facebook,
    private nativeStorage: NativeStorage,
    private sharedService: SharedService
    ) {
    this.username = navParams.get('username');

     }

  getRepos() {
    this.github.getRepos(this.username).subscribe(
      data => { this.foundRepos = data.json(); },
      err => console.error(err),
      () => console.log('getRepos completed')
    );
  }
  goToDetails(repo) {
    this.nav.push(DetailsPage, { repo: repo });
  }
  doFbLogout() {
    let env = this;
    env.facebook.logout()
      .then(function (response) {
        //user logged out so we will remove him from the NativeStorage
        console.log('facebook logout success ',response)
        env.nativeStorage.remove('user');
        console.log('User was logout, redirect to loginPage')
        env.nav.push(LoginPage);
      }, function (error) {
        console.log(error);
      });
  }

}
