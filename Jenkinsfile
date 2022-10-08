    node ('jenkins-pipeline') {
      stage('Get latest version of code') {
        checkout scm
      }

      container ('chrome') {
        stage('Install Packages') {
          sh 'npm install'
        }
        stage('Run Unit Tests') {
          sh 'npm run test'
        }
      } //end container chrome
    } // end node
