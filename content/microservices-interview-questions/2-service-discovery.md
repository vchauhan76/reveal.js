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
# What are types of patterns/types available in Service Discovery

--

# What is the interviewer looking for?
- If you are aware of this concept on different patterns/types of Service Discovery.
- Which pattern you used and why.
- Pros and Cons of each pattern.

--

# Answer
- There are two main service discovery patterns: client‑side discovery and server‑side discovery.
- The Client‑Side Discovery Pattern
    - Client is responsible for determining the network locations of available service instances and load balancing requests across them.
    - The client queries a service registry, which is a database of available service instances.
    - The client then uses a load‑balancing algorithm to select one of the available service instances and makes a request.
    - Netflix OSS provides a great example of the client‑side discovery pattern.
    - Netflix Eureka is a service registry.
    - Netflix Ribbon is an IPC client that works with Eureka to load balance requests across the available service instances.
- Pros
   - Since the client knows about the available services instances, it can make intelligent, application‑specific load‑balancing decisions such as using hashing consistently.
- Cons
   - One significant drawback of this pattern is that it couples the client with the service registry. You must implement client‑side service discovery logic for each              programming language and framework used by your service clients. 
 - The Server‑Side Discovery Pattern 
   -  Here the client service/application does not make a request to service registry.
   -  Instead The client makes a request to a service via a load balancer.
   -  The load balancer queries the service registry and routes each request to an available service instance.
   -  The AWS Elastic Load Balancer (ELB) is an example of a server-side discovery router.
   -  Kubernetes ectd is also one example.
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
- If we have large number of microservies and these microservies can be upstream or downstream, then you can use service discovery.
- But if microservies are small in numbers and mostly independent in business context, doen not require communication with each other then not required.
