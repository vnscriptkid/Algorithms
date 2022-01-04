## 26. Load Balancers and App Servers ep1 | 00:04:15

- Diagram a scalable web server
- Could be: software (nginx) || hardware
- dest ip to server is of LB
- LB change ip of reqs and redirects to internal servers
- Behind the scenes:
  - pick app server
  - forward req to app server
  - receive res from app server
  - forward res to client
- Benefits:
  - Improves res time
  - Improves fault tolerance
  - Hides internal servers (improves security)
  - Handle faulure (exp: all app servers are busy)
- LB can be Single point of Failure? HA Pair (high availability)

## 27. Load Balancers and App Servers ep2 | 00:06:53
- Assumptions:
  - http reqs (rest api)
  - stateless app server: do not store user's state on app server (user's cart, user's session)
    - why? any req for that user must be redirected to server holding user's state.
    - so, where to store user's state? db || client => any req can be handled by any app server
  - short-lived (no long connection)

- Scheduling Algorithms:
  - Round-Robin: 123.123.123... small number of app servers
  - Random: 
  - Weighted Round-Robin: take power of server into account
  - Geographic Location
  - Server Load
  - Response Time
  - Up/down time
  - Capabilities
  - num of connections (live): long conn, download files...

