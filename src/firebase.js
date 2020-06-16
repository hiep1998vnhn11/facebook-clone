import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore"
import "firebase/database";

const config = require("./firebase_config.json");

class FirebaseController {
    constructor(){
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore();
        this.database = app.database();
    }

    login(email, password){
        return this.auth.signInWithEmailAndPassWord(email, password);
    }

    logout(){
        return this.auth.signOut();
    }

    async register(email, password, displayName, birthday){
        await this.auth.createUserWithEmailAndPassword(email, password);
        return this.auth.currentUser.updateProfile({
            displayName: displayName,
            photoUrl:
                "https://i0.wp.com/www.mvhsoracle.com/wp-content/uploads/2018/08/default-avatar.jpg"
        });
    }


    setupProfile(nickName, avatarURL, backgroundURL) {
        this.auth.currentUser.updateProfile({
        displayName: nickName,
        photoURL: avatarURL
        }).then(function() {
        console.log("Update Success!");
        } ).catch(error => {
        console.log(error);
        })
    }

    isInitialized(){
        return new Promise((resolve) => {
            this.auth.onAuthStateChanged(resolve);
        });
    }

    getCurrentUser(){
        return this.auth.currentUser;
    }

    getDBusers(){
        let users = [];
        this.database.ref('users').on('value', snap => {
            let user = snap.val();
            user['uid']= snap.key;
            users.push(user);
        });
        return users;
    }

}

export default new FirebaseController();