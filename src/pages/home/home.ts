import { Component } from '@angular/core';
import { GitHubService } from '../../services/github';
import { NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { Facebook } from '@ionic-native/facebook';
import { NativeStorage } from '@ionic-native/native-storage';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GitHubService,NativeStorage,Facebook]

})
export class HomePage {
  public foundRepos;
  public username;
  constructor(private github: GitHubService,
    private nav: NavController,
    private navParams: NavParams,
    private facebook: Facebook,
    private nativeStorage: NativeStorage) {
    this.username = navParams.get('username');

     this.nativeStorage.getItem('user')
    .then(function (data){
      console.log("data faceBook'user :")
      console.log(data);    
    }, function(error){
      console.log(error);
    });

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
   
    this.facebook.logout()
      .then(function (response) {
        //user logged out so we will remove him from the NativeStorage
        this.nativeStorage.remove('user');
        this.nav.push(LoginPage);
      }, function (error) {
        console.log(error);
      });
  }

}
