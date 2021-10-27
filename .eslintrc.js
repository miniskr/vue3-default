module.exports = {
  extends: [
    "plugin:vue/vue3-recommended",
  ],
  rules: {
    "vue/html-self-closing": ["error", {
      "html": {
        normal: "never", void: "always"
      }
    }],
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 3
      },      
      "multiline": {
        "max": 1
      }
    }]
  }
}