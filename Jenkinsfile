// pipeline {
//   agent any
//   tools {nodejs "Newman"}
//   stages {
//     stage('preflight') {
//       steps {
//         sh 'node -v'
//       }
//     }
//     stage('build') {
//       steps {
//         sh 'npm install'
//       }
//     }
//     stage('test') {
//       steps {
//         sh 'npm run test'
//       }
//     }
//   }
// }


pipeline {
    agent any

    stages {
        stage('Git download') {
            steps {
                git credentialsId: '4a5ef452-1ba0-47d0-874c-8dc07e263942', url: 'https://github.com/Kryvchenko/api-tests'
            }
        }
        stage('Install') {
            steps {
                bat encoding: 'ASCII', returnStatus: true, script: 'npm install'
            }
        }
        stage('Run e2e and login negative test suites with Chrome browser') {
            steps {
                bat encoding: 'ASCII', returnStatus: true, script: 'npm run run:github'
            }
        }
    }
}