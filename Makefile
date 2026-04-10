demo: kill
	python3 -m http.server $(PORT) --directory . & open http://localhost:4242/demo/demo.html

kill:
	lsof -nti:$(PORT) | xargs kill -9



PORT := 4242
ifeq (run, $(firstword $(MAKECMDGOALS)))
  RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  $(eval $(RUN_ARGS):;@:)
endif