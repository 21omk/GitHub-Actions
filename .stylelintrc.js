module.exports = {
  extends: ["stylelint-config-standard"],
  rules: {
    "selector-class-pattern": null,
    "custom-property-pattern": null,
    "selector-id-pattern": null,
    "keyframes-name-pattern": null,
    "font-family-name-quotes": "always-unless-keyword",
    "color-function-notation": "legacy",
    "alpha-value-notation": "number",
    "media-feature-range-notation": "prefix",
    "rule-empty-line-before": ["always", {
      "except": ["after-single-line-comment", "first-nested"]
    }]
  }
};