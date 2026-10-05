export default {
    '**/*.php': ['vendor/bin/duster fix'],
    '**/*.{js,css,json,yml,yaml,md}': ['prettier --write'],
};
