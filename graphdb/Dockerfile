FROM khaller/graphdb-free:9.10.0

#FROM zzglider/mygraphdb:prc2021

# Build time arguments

ENV GDB_HEAP_SIZE=2G

RUN mkdir -p /repository.init/Animals

RUN mkdir -p /temporary-folder

COPY animals-complete.ttl /repository.init/Animals/toLoad/animals-complete.ttl

COPY config.ttl /repository.init/Animals/config.ttl

#RUN mkdir -p /animals/toLoad

#COPY config.ttl animals/toLoad/config.ttl

#COPY animals-complete.ttl animals/toLoad/animals-complete.ttl

#RUN /bin/sh -c /opt/graphdb/bin/loadrdf -f -c /repository.init/Animals/config.ttl -m parallel /repository.init/Animals/toLoad/animals-complete.ttl

RUN /opt/graphdb/bin/preload -f -c /repository.init/Animals/config.ttl /repository.init/Animals/toLoad/animals-complete.ttl -b=1000 -queue.folder=/temporary-folder