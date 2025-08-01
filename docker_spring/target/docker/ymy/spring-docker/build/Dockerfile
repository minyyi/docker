#ë² ì´?Š¤ ?´ë¯¸ì?
FROM openjdk:17 

COPY target/docker_spring-0.0.1-SNAPSHOT.jar app.jar

# JAR ?ŒŒ?¼?„ ì»¨í…Œ?´?„ˆ?˜ ë£¨íŠ¸ ?””? ‰?† ë¦¬ì— ë³µì‚¬
ENTRYPOINT [ "java", "-jar", "app.jar" ]  
# -jdk-slim



# FROM openjdk:17 as builder
# WORKDIR /app
# COPY . .
# RUN chmod +x ./mvnw
# RUN ./mvnw clean package -DskipTests

# FROM openjdk:17-jre-slim
# COPY --from=builder /app/target/*.jar app.jar
# EXPOSE 8080
# ENTRYPOINT ["java", "-jar", "app.jar"]
