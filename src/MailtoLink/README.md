---
title: 'MailtoLink'
type: 'component'
components:
- MailtoLink
categories:
- Buttonlike
tabName: 'implementation'
status: 'Needs Work'
designStatus: 'Done'
devStatus: 'To Do'
notes: |
  Remove unnecessary props.
  Remove baked in English strings.
  Use React.forwardRef for ref forwarding
---

## minimal usage

```jsx live
<MailtoLink to="edx@example.com">
  edx@example.com
</MailtoLink>
```

## with blank target

```jsx live
<MailtoLink to="edx@example.com" target="_blank">
  edx@example.com
</MailtoLink>
```

## with onClick

```jsx live
<MailtoLink
  to="edx@example.com"
  target="_blank"
  onClick={() => { /* some actions */ }}
>
  edx@example.com
</MailtoLink>
```

## with subject and body

```jsx live
<MailtoLink
  to="edx@example.com"
  subject="Check out this mailto component!"
  body="This mailto component is awesome!"
>
  email with subject and body
</MailtoLink>
```

## with cc and bcc

```jsx live
<MailtoLink
  cc="edx@example.com"
  bcc="edx@example.com"
>
  More mail, this time with cc and bcc
</MailtoLink>
```

## with multiple cc and bcc

```jsx live
<MailtoLink
  cc={['foo@example.com', 'bar@example.com', 'baz@example.com']}
  bcc={['foo@example.com', 'bar@example.com', 'baz@example.com']}
>
  edx@example.com
</MailtoLink>
```
