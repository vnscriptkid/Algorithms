## 0. System Design Basics: Horizontal vs. Vertical Scaling

- 2 ways of scaling:
  - Buy more CPUs, RAM (vertical scaling)
  - Buy more machines (horizontal scaling)

- Comparing:

| Metrics | Horizontal Scaling | Vertical Scaling |
| -- | -- | -- |
| LB | Need LB | N/A |
| Failure Handling | ✔️ Resilient | ⚠️ Single point of failure |
| Communicate | Network calls (btw servers) 🐌 | Inter-process communication 🚀 |
| Consistency | ⚠️ Data inconsistency | ✔️ Data consistency | 
| Scale | ✔️ Scale well as # users increase (no limit) | ⚠️ Do not scale well (hard limit) |

1. System Design Primer ⭐️: How to start with distributed systems?
2. What is Load Balancing? ⚖️
3. What is Consistent Hashing and Where is it used?
4. What is a Message Queue and Where is it used?
5. What is a microservice architecture and it's advantages?
6. What is Database Sharding?
7. How Netflix onboards new content: Video Processing at scale 🎥
8. System Design: Tinder as a microservice architecture
9.  What is Distributed Caching? Explained with Redis!
10. Whatsapp System Design: Chat Messaging Systems for Interviews
11. What is an API and how do you design it? 🗒️✅
12. Capacity Planning and Estimation: How much data does YouTube store daily?
13. System Design Course Overview
14. What is the Publisher Subscriber Model?
15. Why do Databases fail? AntiPatterns to avoid!
16. System Design: Content Delivery Networks (Simplified)
17. How to avoid a single point of failure in distributed systems ✅
18. What's an Event Driven System?
19. Introduction to NoSQL databases
20. How databases scale writes: The power of the log ✍️🗒️
21. Service discovery and heartbeats in micro-services 👍📈
22. Distributed Consensus and Data Replication strategies on the server
23. Designing Instagram: System Design of News Feed
24. How to avoid cascading failures in a distributed system 💣💥🔥
25. Food delivery algorithms: Designing a location database
26. Low Level Design: A Video Course
27. Containers and Virtualisation in Cloud Computing ☁️
28. 5 Tips for System Design Interviews
29. System Design Interview: TikTok architecture with @sudoCODE
30. System Design: Online Judge for coding contests
31. Data Consistency and Tradeoffs in Distributed Systems
32. Detecting anomalies using Isolation Trees: Practical Machine Learning
33. Moving from Monoliths to Microservices 🎂 → 🍰🍰🍰
34. Five common system design interview mistakes 😅
35. This is what a System Design Advertisement looks like 😛
