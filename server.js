// content of index.js
const http = require('http')
const port = 5501

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end(`#!/usr/bin/python
# -*- coding: utf-8 -*-

import glob
import sys
import random
from BaseHTTPServer import BaseHTTPRequestHandler,HTTPServer

PORT_NUMBER = 5500

def getTemp(path):
	file = open(path)
	text = file.read()
	file.close()
	return float(text.split("\\n")[1].split("=")[1]) / 1000

def getTemps():
	sensors = glob.glob("/sys/bus/w1/devices/28*/w1_slave")
	return [getTemp(s) for s in sensors]

class myHandler(BaseHTTPRequestHandler):

	def do_GET(self):
		print getTemps()
		self.send_response(200)
		self.send_header('Content-type','application/json')
		self.end_headers()
		response = '{"value":%d}' % random.randint(32,63)
		print "  Response: '%s'" % response
		self.wfile.write(response)
		return

try:
	#Create a web server and define the handler to manage the
	#incoming request
	server = HTTPServer(('', PORT_NUMBER), myHandler)
	print 'Started httpserver on port ' , PORT_NUMBER

	#Wait forever for incoming htto requests
	server.serve_forever()

except KeyboardInterrupt:
	print '^C received, shutting down the web server'
	server.socket.close()
`);
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
