WebShellApp
  .manifest({
    "v": 0,
    "name": "Vanilla Example App",
    "short_name": "Vanilla Example",
    "version": "0.0.1",
    "icon": "icon.svg",
    "description": "The Vanilla JS example app for WebShell ",
    "license": "MIT",
    "homepage": "https://github.com/websh-org/template-app-vanilla#readme",
    "repository": "https://github.com/websh-org/template-app-vanilla.git",
    "issues": "https://github.com/websh-org/template-app-vanilla/issues",
    "api": {
      "file": {
        "new": "text",
        "open": ["text"],
        "save": ["text"],
        "formats": {
          "text": {
            "name": "Text File",
            "extension": "txt",
            "type": "text/plain",
            "accept": "text/*"
          }
        }
      }
    }
  })

const editor = document.getElementById("editor");

WebShellApp.command("file-new", function () {
  editor.value = ""
})

WebShellApp.command("file-open", function ({ format, content, type, extension }) {
  // you can do different things here based on the type, format and extansion

  if (type === "text/html") {
    this.throw("file-cannot-open", {
      reason: "This is not a HTML editor."
    })
  }

  editor.value = content
})

WebShellApp.command("file-save", async function ({ format }) {
  // you can do different things here based on the format 
  // we dont't really need async/await here, we're just using 
  // it to demonstrate 
  return await { content: editor.value };
})
