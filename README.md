# Social Login with JHipster
 
This example app shows how to integrate Social Login in a JHipster app (powered by [Spring Boot](https://spring.io/projects/spring-boot) and [Spring Security](https://spring.io/projects/spring-security)).

Please read [Add Social Login to Your JHipster App](https://developer.okta.com/blog/2019/02/19/add-social-login-to-spring-boot) to see how this app was created. 

**Prerequisites:** [Java 8](https://adoptopenjdk.net/).

> [Okta](https://developer.okta.com/) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage, and secure users and roles in any application.

* [Getting Started](#getting-started)
* [Links](#links)
* [Help](#help)
* [License](#license)

## Getting Started

To install this example application, run the following commands:

```bash
git clone https://github.com/oktadeveloper/okta-spring-boot-social-login-example.git social-login
cd social-login
```

This will get a copy of the project installed locally. To install all of its dependencies and start the app, run Gradle.

```
./gradlew
```

### Setup Okta

To use this app with Okta, you'll need to change a few things. First, you'll need to create a free developer account at <https://developer.okta.com/signup/>. After doing so, you'll get your own Okta domain, that has a name like `https://dev-123456.okta.com`.

Modify `src/main/resources/application.yml` to use your Okta settings.

```yaml
security:
    oauth2:
        client:
            access-token-uri: https://{yourOktaDomain}/oauth2/default/v1/token
            user-authorization-uri: {yourCustomDomain}
            client-id: {clientId}
            client-secret: {clientSecret}
            scope: openid profile email
        resource:
            user-info-uri: https://{yourOktaDomain}/oauth2/default/v1/userinfo
```

Create an OIDC App in Okta to get a `{clientId}` and `{clientSecret}`. To do this, log in to your Okta Developer account and navigate to **Applications** > **Add Application**. Click **Web** and click the **Next** button. Give the app a name you’ll remember, specify `http://localhost:8080` as a Base URI, and `http://localhost:8080/login` as a Login Redirect URI. Click **Done** followed by **Edit**. Add `http://localhost:8080` as a Logout redirect URI. Copy the client ID and secret into your `application.yml` file.

Create a `ROLE_ADMIN` and `ROLE_USER` group and add users into them. 

Navigate to **API** > **Authorization Servers**, click the **Authorization Servers** tab and edit the default one. Click the **Claims** tab and **Add Claim**. Name it "groups", and include it in the ID Token. Set the value type to "Groups" and set the filter to be a Regex of `.*`.

After making these changes, you should be good to go!

**TIP:** You can also keep your settings outside of your app, and override them with environment variables. For example, create an `~/.okta.env` file:

```shell
export SECURITY_OAUTH2_CLIENT_ACCESS_TOKEN_URI="https://{yourOktaDomain}/oauth2/default/v1/token"
export SECURITY_OAUTH2_CLIENT_USER_AUTHORIZATION_URI="{yourCustomDomain}"
export SECURITY_OAUTH2_RESOURCE_USER_INFO_URI="https://{yourOktaDomain}/oauth2/default/v1/userinfo"
export SECURITY_OAUTH2_CLIENT_CLIENT_ID="{yourClientId}"
export SECURITY_OAUTH2_CLIENT_CLIENT_SECRET="{yourClientSecret}"
```

## Links

This example uses the following open source libraries:

* [JHipster](https://www.jhipster.tech/)
* [Spring Boot](https://spring.io/projects/spring-boot)
* [Spring Security](https://spring.io/projects/spring-security)

## Help

Please post any questions as comments on the [blog post](https://developer.okta.com/blog/2019/02/19/add-social-login-to-spring-boot), or visit our [Okta Developer Forums](https://devforum.okta.com/). 

This application was generated using JHipster 5.8.1, you can find documentation and help at [https://www.jhipster.tech/documentation-archive/v5.8.1](https://www.jhipster.tech/documentation-archive/v5.8.1).

## License

Apache 2.0, see [LICENSE](LICENSE).