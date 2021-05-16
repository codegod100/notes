- Need to keep track of users we follow because currently the bridge only downloads the pages of people whom the user follows that is logged into the bridge
- [[docs]] at [[agora ctzn docs]]


- [ ] add https functionality
	- [x] put paths to certs in config file in prod
		- [x] /etc/letsencrypt/live/anagora.org/cert.pem
		- [x] /etc/letsencrypt/live/anagora.org/privkey.pem
	- [ ] date issue because pages don't support the first character being a number
		- [ ] use [[agora prefix]] in meantime for now `[[agora]]-prefix`
		- [ ] alternatively use a well defined prefix like `iso8601-`