import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'city-pulse';
}
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2dnTD6b1v_RSkS2r_WvO8nOzQ3mzhH_8",
  authDomain: "deploy-demo-514be.firebaseapp.com",
  projectId: "deploy-demo-514be",
  storageBucket: "deploy-demo-514be.firebasestorage.app",
  messagingSenderId: "1074212374412",
  appId: "1:1074212374412:web:9bcf0067b3e93e622478a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);