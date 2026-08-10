"""Local file-save server for Claude Design → ToughJobs sync."""
import http.server
import json
import os
import sys

BASE = r"C:\Users\abigr\ToughJobs"

class Handler(http.server.BaseHTTPRequestHandler):
    def log_message(self, fmt, *args):
        print(fmt % args)

    def send_cors(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_cors()
        self.end_headers()

    def do_POST(self):
        length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(length)
        try:
            data = json.loads(body.decode("utf-8"))
            filename = data["filename"]
            content = data["content"]
            # Sanitize filename - no path traversal
            if ".." in filename or filename.startswith("/") or filename.startswith("\\"):
                raise ValueError("Bad filename")
            dest = os.path.join(BASE, filename)
            os.makedirs(os.path.dirname(dest), exist_ok=True)
            with open(dest, "w", encoding="utf-8", newline="") as f:
                f.write(content)
            resp = json.dumps({"ok": True, "file": filename}).encode()
            self.send_response(200)
            self.send_cors()
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(resp)))
            self.end_headers()
            self.wfile.write(resp)
            print(f"SAVED: {filename} ({len(content)} chars)")
        except Exception as e:
            err = json.dumps({"ok": False, "error": str(e)}).encode()
            self.send_response(500)
            self.send_cors()
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(err)))
            self.end_headers()
            self.wfile.write(err)
            print(f"ERROR: {e}")

port = 7823
print(f"Sync server starting on port {port}...")
with http.server.HTTPServer(("127.0.0.1", port), Handler) as srv:
    srv.serve_forever()
