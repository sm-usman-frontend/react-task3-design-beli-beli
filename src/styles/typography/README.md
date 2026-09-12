# Typography scale

Use one of these classes on any text element:

- `text-small`
- `text-medium`
- `text-large`
- `text-xl`
- `text-xxl`
- `text-xxxl`

Each class is responsive and uses a `clamp()` value from `index.css`.

```jsx
<h2 className="text-xxl">Section title</h2>
<p className="text-medium">Supporting copy</p>
<span className="text-small">Helper text</span>
```

The size values can be changed centrally in `index.css` using the `--font-size-*` variables. Existing `heading-text`, `body-text`, and `label-text` classes remain supported.
