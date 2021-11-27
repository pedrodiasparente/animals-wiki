FROM khaller/graphdb-free:9.10.0

# Build time arguments

RUN mkdir -p /repository.init/toLoad

COPY config.ttl /repository.init/toLoad/config.ttl

COPY animals-complete.ttl /repository.init/toLoad/animals-complete.ttl

RUN ls /repository.init/toLoad

#RUN mkdir -p /animals/toLoad

#COPY config.ttl animals/toLoad/config.ttl

#COPY animals-complete.ttl animals/toLoad/animals-complete.ttl

#RUN /bin/sh -c /opt/graphdb/bin/loadrdf -f -c animals/toLoad/config.ttl -m parallel animals/toload/animals-complete.ttl