# Portal

Portal is the AMP UI

An open source [CaaS](https://blog.docker.com/2016/02/containers-as-a-service-caas/) for Docker, batteries included.

 * Host your own high availability cluster or use `cloud.appcelerator.io`
 * [Docker Infrakit](https://github.com/docker/infrakit) for self-healing infrastructure
 * Use Docker Compose v3 [stackfiles](https://docs.docker.com/compose/compose-file/) to deploy your stacks
 * Account management support for users, organizations and teams with role-based access controls
 * Logs and metrics realtime filtered feeds and historical query support
 * [Kibana dashboard](https://www.elastic.co/guide/en/kibana/current/dashboard.html) service included

While not recommended for production use quite yet, it's getting close (anticipated shortly after v0.12 in mid-June).
In the meantime, you can use the current playground hosted at `cloud.appcelerator.io`,
and you can also host your own cluster. You can even create a full cluster on your own laptop
with `amp cluster create` using the CLI.

## version 0.12

available image on dockerHub:
- appcelerator/portal:latest
- appcelerator/portal:0.12.0
- appcelerator/portal:0.11.0

## Build image

It needs to install node v7.7.0 min and npm 5.0.0 min
Execute command: make build-portal
The image "appcelerator/portal:local" is created locally


## Portal in amp stack

Use this stack file to add Portal in amp stack

```
version: "3"

networks:
  default:
    external:
      name: ampnet
  infrastructure:

services:

  portal:
    image: appcelerator/portal:local
    networks:
      - default
    deploy:
      mode: replicated
      replicas: 1
      labels:
        io.amp.role: "infrastructure"
      placement:
        constraints:
        - node.labels.amp.type.core == true
    environment:
      SERVICE_PORTS: "80"
      VIRTUAL_HOST: "http://cloud.*,http://local.*,https://cloud.*,https://local.*"
      FORCE_SSL: 1
    labels:      io.amp.role: "infrastructure"
```

and add it, with the command: docker stack up -c [this stack file] amp


## Contributing

If you want to hack on the project, we have a fully containerized toolchain.
All you need is Docker to build, test, and deploy! We would love for you to get involved,
so check out [CONTRIBUTING](project/CONTRIBUTING.md) and other docs under [project](project/).

## License

AMP is licensed under the Apache License, Version 2.0.
See [LICENSE](https://github.com/appcelerator/amp/blob/master/LICENSE)
for the full license text.
