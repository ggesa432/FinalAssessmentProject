pipeline {
    agent any

    tools {
        maven 'Maven 3.9.9' // Match the name in Jenkins Global Tool Configuration
    }

    stages {
        // Stage 1: Checkout code from Git
        stage('Checkout') {
            steps {
                git branch: 'main', 
                url: 'https://github.com/ggesa432/FinalAssessmentProject.git' // Replace with your repo
            }
        }

        // Stage 2: Build and test the backend
        stage('Build Backend') {
            steps {
                dir('backend') { // Navigate to backend directory
                    script {
                        // Install dependencies 
                        sh 'mvn clean install' // For Maven
                    
                    }
                }
            }
        }

        // Stage 3: Build and test the frontend
        stage('Build Frontend') {
            steps {
                dir('frontend') { // Navigate to frontend directory
                    script {
                        // Install Node.js dependencies
                        sh 'npm install'
                        // Build Angular app
                        sh 'npm run build -- --configuration production'
                        // Run unit tests
                        sh 'npm test'
                    }
                }
            }
        }

        // Stage 4: Archive artifacts (optional)
        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: '**/target/*.jar', fingerprint: true // Backend JAR
                archiveArtifacts artifacts: 'frontend/dist/**/*', fingerprint: true // Frontend build files
            }
        }
    }

    post {
        success {
            echo ' Build succeeded!'
        }
        failure {
            echo ' Build failed!'
        }
    }
}
