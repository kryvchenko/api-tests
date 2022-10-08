pipeline {
    agent any

    stages {
        stage('Instalation') {
            steps {
                npm install
            }
        }
        stage('Run test') {
            steps {
                npm run test
            }
        }
    }
}