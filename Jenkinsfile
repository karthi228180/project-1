pipeline {
    agent any 

    stages{
        stage("cloning the code"){
            steps{
                echo "code cloning from git...."
                git branch : "main", url: "https://github.com/karthi228180/project-1.git " 
            }
        }
        stage("Build the code"){
            steps{
                sh "docker build -t cicd ."
            }
        }
        stage("Containarization"){
            steps{
                sh "docker run -it -d --name c1 -p 9007:8080 cicd"
            }
        }
        stage("pushing the image to dockerhub"){
            steps{
                echo "Pushing the image to dockerhub"
                withCredentials([usernamePassword(credentialsId:"dockerHub",passwordVariable:"dockerHubPass",usernameVariable: "dockerHubUser")]){
                    sh "docker tag cicd ${env.dockerHubUser}/cicd:latest"
                    sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
                    sh "docker push ${env.dockerHubUser}/cicd:latest"
                }
            }
        }
        stage("Deploy to Kubernetes"){
            step {
                script {
                    dir ("src"){
                        withKubeCinfig(caCertificate: "", clusterName:"", contextName: "", credentialId:"Kubernetes", namespace: "", restrictKubeConfigAccess: false, serverUrl: ""){
                            sh "kubectl delete --all pods"
                            sh "kubectl apply -f deployment.yml"
                            sh "kubectl apply -f service.yml"
                        }
                    }
                }
            }
        }
    }
}