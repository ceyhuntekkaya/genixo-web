#!/usr/bin/env bash
LOG=${1:-./nginx-data/logs/proxy-host-1_access.log}
for bot in OAI-SearchBot ChatGPT-User GPTBot ClaudeBot Claude-User Claude-SearchBot PerplexityBot Perplexity-User Googlebot bingbot Applebot; do
  total=$(grep -c "$bot" "$LOG" || true)
  ok=$(grep "$bot" "$LOG" | grep -c '" 200 ' || true)
  nf=$(grep "$bot" "$LOG" | grep -c '" 404 ' || true)
  echo "$bot toplam=$total 200=$ok 404=$nf"
done
