FROM khaller/graphdb-free:9.10.0

ENV GDB_HEAP_SIZE=2G

RUN mkdir -p /repository.init/Animals

RUN mkdir -p /temporary-folder

COPY animals-complete.ttl /repository.init/Animals/toLoad/animals-complete.ttl

COPY config.ttl /repository.init/Animals/config.ttl