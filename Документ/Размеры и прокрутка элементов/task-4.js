// В чём отличие между getComputedStyle(elem).width и elem.clientWidth?

// 1. clientWidth возвращает число, а getComputedStyle(elem).width – строку с px.
// 2. getComputedStyle не всегда даст ширину, он может вернуть, например, "auto" для строчного элемента.
// 3. clientWidth соответствует внутренней области элемента, включая внутренние отступы padding, а CSS-ширина соответствует внутренней области без внутренних отступов padding.
