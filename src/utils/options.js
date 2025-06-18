export function optionKey(opt) {
  if (opt && typeof opt === 'object') {
    return opt.id ?? opt.value ?? opt.key ?? '';
  }
  return opt ?? '';
}

export function optionLabel(opt) {
  if (opt && typeof opt === 'object') {
    return (
      opt.name ||
      opt.label ||
      opt.title ||
      opt.value ||
      opt.hex ||
      opt.color ||
      ''
    );
  }
  return opt ?? '';
}

export function optionValue(opt) {
  if (opt && typeof opt === 'object') {
    return opt.hex || opt.color || opt.value || optionLabel(opt);
  }
  return opt ?? '';
}
