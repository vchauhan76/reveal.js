## Question
# What is Service Discovery?

--

# What is the interviewer looking for?
- Understanding of the design pattern
- How the pattern applies to microservices

--

# Answer
- Service Discovery is a design pattern used in microservices architecture.
- Helps microservices dynamically locate and call dependent services
- Necessary in microservice architecture because of dynamically assigned IPs and hosts
- Helps with autoscaling, handling failures and upgrades


---

## Question
# What are types of patterns/types available in Service Discovery?

--

# What is the interviewer looking for?
- If you are aware of this concept on different patterns/types of Service Discovery.
- Which pattern you used and why.

--

# Answer
- There are two main service discovery patterns: client‑side discovery and server‑side discovery.
- The Client‑Side Discovery Pattern
    - Client is responsible for determining the network locations of available service instances and load balancing requests across them.
    - The client queries a service registry.
    - The client then uses a load‑balancing algorithm to select one of the available service instances and makes a request.
    - Netflix OSS provides a great example of the client‑side discovery pattern.
    - Netflix Eureka is a service registry.
    - Netflix Ribbon is an IPC client that works with Eureka to load balance requests across the available service instances.
    -
 - The Server‑Side Discovery Pattern 
   -  Here the client service/application does not make a request to service registry.
   -  Instead The client makes a request to a service via a load balancer.
   -  The load balancer queries the service registry and routes each request to an available service instance.
   -  The AWS Elastic Load Balancer (ELB) is an example of a server-side discovery router.
   -  Kubernetes ectd is also one example.
   
---


## Question
# What are Pros/Cons of each service discovery pattern

--

# What is the interviewer looking for?
- If you are aware of pros and cons for each pattern. 
- If you have thought on this before using pattern.

--

# Answer
- The Client‑Side Discovery Pattern
- Pros
   - Since the client knows about the available services instances, it can make intelligent, application‑specific load‑balancing decisions such as using hashing consistently.
- Cons
   - One significant drawback of this pattern is that it couples the client with the service registry. You must implement client‑side service discovery logic for each              programming language and framework used by your service clients. 

- The Server‑Side Discovery Pattern 
- Pros
   - One great benefit of this pattern is that details of discovery are abstracted away from the client.
   - This eliminates the need to implement discovery logic for each programming language and framework used by your service clients.
- Cons
    - Unless the load balancer is provided by the deployment environment, it is yet another highly available system component that you need to set up and manage. 


---


## Question
# Is it mandatory to use service discovery in microservice architecture?

--

# What is the interviewer looking for?
- What type of system complexity you have worked on.
- If you have unnecessarily used Service Discovery.
- Can Microservice Architecture completes without Service Discovery.

--

# Answer

- No.
- It depends on business scenario.
- Ideal when there are a large number of microservices.


---

## Question
# What is Service Registry ?

--

# What is the interviewer looking for ?
- If you are aware of Service Registry concept.
- How service registry helps in service discovery. 

--

## Answer
- service registry is a key part of service discovery.
- It is a database containing the network locations of service instances.
- Client can cache network locations obtained from service registry.
- Netflix Eureka if good example of service registry, It provides REST API for registering and quering service instances.
- Some examples of service registries includes
   - etcd
   - consul
   - Apache Zookeeper
 

---

## Question
# What are different Service Registration options/pattern ? 

--

# What is interviewer looking for ?
- If you are aware of this concept.

## Answer
- There are two types of Service Registration pattern
  - self registration pattern.
  - third patry registration pattern. 

- The Self-Registration Pattern.
  -  When using the self‑registration pattern, a service instance is responsible for registering and deregistering itself with the service registry. 
  -  A service instance sends heartbeat requests to prevent its registration from expiring.
  -  Netflix OSS Eureka client is good example.
  -  One benefit is that it is relatively simple and doesn’t require any other system components. 
  -  Major drawback is that it couples the service instances to the service registry. 

- The Third‑Party Registration Pattern
  - Here service instances aren’t responsible for registering themselves with the service registry.
  - Another system component known as the service registrar handles the registration and deregistration of service instances.
  - One example of a service registrar is the open source Registrator project. Another example of a service registrar is NetflixOSS Prana.
  - A major benefit is that services are decoupled from the service registry. 
  - One drawback of this pattern is that unless it’s built into the deployment environment, it is yet another highly available system component that you need to set up and       manage.




