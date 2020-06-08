import firebase from 'firebase'
var firebaseConfig = {
	apiKey: "AIzaSyCApsa879XsHXv_neqJSJaPWD0wIlp4ako",
	authDomain: "testsubscribeproject.firebaseapp.com",
	databaseURL: "https://testsubscribeproject.firebaseio.com",
	projectId: "testsubscribeproject",
	storageBucket: "testsubscribeproject.appspot.com",
	messagingSenderId: "226567732940",
	appId: "1:226567732940:web:e162cda57dcddbaf200c69"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;


