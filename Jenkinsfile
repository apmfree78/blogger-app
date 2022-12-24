pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/apmfree78/blogger-app', branch: 'master')
      }
    }

    stage('Log') {
      parallel {
        stage('Log') {
          steps {
            sh 'ls -la'
          }
        }

        stage('Front-End Unit Test') {
          steps {
            sh 'cd blogger-app && npm i && npm run test'
          }
        }

      }
    }

  }
}