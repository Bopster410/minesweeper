package main

import (
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/public/sw.js", func(w http.ResponseWriter, r *http.Request) {
		p := "./public/public/sw.js"
		w.Header().Add("Service-Worker-Allowed", "/")
		http.ServeFile(w, r, p)
	})

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		p := "./public/index.html"
		http.ServeFile(w, r, p)
	})

	http.HandleFunc("/index.js", func(w http.ResponseWriter, r *http.Request) {
		p := "./public/index.js"
		http.ServeFile(w, r, p)
	})

	http.HandleFunc("/favicon.ico", func(w http.ResponseWriter, r *http.Request) {
		p := "./public/favicon.ico"
		http.ServeFile(w, r, p)
	})
	http.HandleFunc("/tiletextures.png", func(w http.ResponseWriter, r *http.Request) {
		p := "./public/tiletextures.png"
		http.ServeFile(w, r, p)
	})

	log.Printf("server is running...")
	if err := http.ListenAndServe("0.0.0.0:80", nil); err != nil {
		log.Printf("HTTP server ListenAndServe Error: %s", err.Error())
	}
}
