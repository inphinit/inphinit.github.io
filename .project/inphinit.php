<?php

use Doctum\Doctum;
use Doctum\RemoteRepository\GitHubRemoteRepository;
use Doctum\Version\GitVersionCollection;
use Symfony\Component\Finder\Finder;

define('INPHINIT_PROJECT', __DIR__ . '/../../inphinit/system/vendor/inphinit/framework/src/');

$dir = realpath(INPHINIT_PROJECT);

if ($dir === false) {
    throw new Exception('"' . INPHINIT_PROJECT . '" not found');
}

$iterator = Finder::create()
    ->files()
    ->name('*.php')
    ->exclude('Resources')
    ->exclude('Tests')
    ->in($dir);

// generate documentation for all v2.0.* tags, the 2.0 branch, and the main one
$versions = GitVersionCollection::create($dir)
    // In a non case-sensitive way, tags containing "PR", "RC", "BETA" and "ALPHA" will be filtered out
    // To change this, use: `$versions->setFilter(static function (string $version): bool { // ... });`
    ->addFromTags('v2.0.*')
    ->add('2.0', 'Inphinit 2.0')
    ->add('1.0', 'Inphinit 1.0');

return new Doctum($iterator, [
    'versions'             => $versions,
    'title'                => 'Inphinit API',
    'language'             => 'en', // Could be 'fr'
    'build_dir'            => __DIR__ . '/../api/%version%',
    'cache_dir'            => __DIR__ . '/.cache/%version%',
    'source_dir'           => dirname($dir) . '/',
    'remote_repository'    => new GitHubRemoteRepository('inphinit/framework', dirname($dir)),
    'default_opened_level' => 3, // optional, 2 is the default value
]);
