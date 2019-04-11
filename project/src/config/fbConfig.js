	import firebase from 'firebase/app';
	import 'firebase/firestore';
	import 'firebase/auth';
	
	// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCUmimHsxp-3EVMKrjINt1n3mU-xkQ9iF0",
    authDomain: "ghproject-1.firebaseapp.com",
    databaseURL: "https://ghproject-1.firebaseio.com",
    projectId: "ghproject-1",
	};
	
	firebase.initializeApp(config);

	export default firebase;