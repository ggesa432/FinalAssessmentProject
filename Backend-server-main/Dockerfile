FROM openjdk:17-jdk
COPY target/backend-0.0.1-SNAPSHOT.jar /app/
WORKDIR /app/
ENTRYPOINT ["java", "-jar", "backend-0.0.1-SNAPSHOT.jar"]
EXPOSE 8080
