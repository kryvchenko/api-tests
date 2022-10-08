pipeline {
    agent any

    stages {
        stage('Instalation') {
            steps {
                nodejs('18.9.1') {
               npm install
          }
            }
        }
        stage('Run test') {
            steps {
                nodejs('18.9.1') {
                npm run test
          }
            }
        }
    }
}