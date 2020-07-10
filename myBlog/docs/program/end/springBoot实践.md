# SpringBoot实践

## 一、SpringBoot入门
1、SpringBoot简介
* 简化Spring应用开发的一个框架
* 整个Spring技术栈思维一个大整合
* J2EE开发的一站式解决方案

2、微服务 MicroService
* 一个应用是一组小型服务；可以通过HTTP的方式进行交互
* 每一个功能元素最终都是一个可独立替换和独立升级的软件

SpringBoot可以快速构建一个微服务单元

3、环境
- jdk 1.8: SpringBoot推荐1.7以上
- maven3.x maven 3.3以上版本
- IDEA 2017
- SpringBoot 1.5.9.RELEASE

## 二、SpringBoot实践
### 1.springboot hello world
1、创建Maven项目

step1 设置maven

![spring-dev-001](./../../.vuepress/public/img/springPractice/springDev001.png)

step2 创建项目

![spring-dev-002](./../../.vuepress/public/img/springPractice/springDev002.png)

step3 设置项目名称以及路径
![spring-dev-003](./../../.vuepress/public/img/springPractice/springDev003.png)

step4 创建成功
![spring-dev-004](./../../.vuepress/public/img/springPractice/springDev004.png)

2、导入springboot依赖

SpringBoot官网

https://spring.io/projects/spring-boot#overview

https://spring.io/guides/gs/rest-service/

在pom.xml中添加：

``` 
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.2.2.RELEASE</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
    </dependencies>
```

导入完毕：

![spring-dev-007](./../../.vuepress/public/img/springPractice/springDev007.png)


3、编写主程序以及Control部分

主程序
```
@SpringBootApplication
public class HelloWorldMainApplication {

    public static void main(String[] args){
        // Spring应用启动
        SpringApplication.run(HelloWorldMainApplication.class, args);
    }
}
```

Control部分
```
@Controller
public class HelloController {

    @ResponseBody
    @RequestMapping("/hello")
    public String hello(){
        return "hello world";
    }
}
```

4、运行结果

控制台输出：

![spring-dev-008](./../../.vuepress/public/img/springPractice/springDev008.png)

浏览器输入地址: http://localhost:8085/hello

![spring-dev-009](./../../.vuepress/public/img/springPractice/springDev009.png)

5、简化部署

通过插件将应用打包成可执行的jar包

pom.xml中添加：

```
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
```

执行生命周期中的打包：

![spring-dev-010](./../../.vuepress/public/img/springPractice/springDev010.png)


![spring-dev-012](./../../.vuepress/public/img/springPractice/springDev012.png)


打包成jar包后，执行java -jar
![spring-dev-013](./../../.vuepress/public/img/springPractice/springDev013.png)

### 2.HelloWorld探究
1、场景启动器starters
```
    SpringBoot将所有功能场景抽取出来为一个个pom启动器，帮助导入正常运行所需要的依赖。
```
参考：https://docs.spring.io/spring-boot/docs/2.2.2.RELEASE/reference/html/

2、主程序类、主入口
```
@SpringBootApplication
public class HelloWorldMainApplication {

    public static void main(String[] args){
        // Spring应用启动
        SpringApplication.run(HelloWorldMainApplication.class, args);
    }
}
```

@SpringBootApplication 标注在某个类上面，说明这个类是SpringBoot的主配置类，Spring应该运行这个类的main方法来启动SpringBoot应用。
```
@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@SpringBootConfiguration
@EnableAutoConfiguration
@ComponentScan(
    excludeFilters = {@Filter(
    type = FilterType.CUSTOM,
    classes = {TypeExcludeFilter.class}
), @Filter(
    type = FilterType.CUSTOM,
    classes = {AutoConfigurationExcludeFilter.class}
)}
)
public @interface SpringBootApplication {
```

(1)第一个注解： *@SpringBootConfiguration*

@SpringBootConfiguration SpringBoot的配置类。标注在某个类上，表示这是一个SpringBoot的配置类。

@Configuration :标注在配置类。配置类也是容器中的一个组件。@Component

(2)第二个注解： *@EnableAutoConfiguration*

@EnableAutoConfiguration 用于开启自动配置功能。





问题记录：

Q1: 2020版本的自动导入Maven，需要点击右上角的按钮。

![spring-dev-005](./../../.vuepress/public/img/springPractice/springDev005.png)

Q2: 添加阿里云镜像

当出现Cannot resolve plugin org.apache.maven.plugins:maven-clean-plugin:2.5，可在settings中添加如下语句：
```
	<mirror> 
		<id>alimaven</id> 
		<name>aliyun maven</name> 
		<url>http://maven.aliyun.com/nexus/content/repositories/central/</url> 
		<mirrorOf>central</mirrorOf> 
	</mirror>
```

Q3：Spring Boot 报错：Web server failed to start. Port 8080 was already in use.

https://blog.csdn.net/zhouky1993/article/details/103974356

```
server:
  port: 8081
```






注：最后修改日期：2020/07/10










