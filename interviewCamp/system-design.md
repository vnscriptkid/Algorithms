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
