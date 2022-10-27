<?php

use Sami\Sami;
use Sami\Parser\Filter\TrueFilter;
use Sami\Version\GitVersionCollection;
use Sami\Reflection\MethodReflection;
use Sami\Reflection\PropertyReflection;
use Sami\RemoteRepository\GitHubRemoteRepository;
use Symfony\Component\Finder\Finder;

define('INPHINIT_PROJECT', __DIR__ . '/../../inphinit/system/vendor/inphinit/framework/src/');

class CustomFilter extends TrueFilter
{
    public function acceptMethod(MethodReflection $method)
    {
        return $method->isPrivate() === false && empty($method->getDocComment()) === false;
    }

    public function acceptProperty(PropertyReflection $property)
    {
        return $property->isPrivate() === false;
    }
}

$dir = realpath(INPHINIT_PROJECT);

if ($dir === false) {
    throw new Exception('"' . INPHINIT_PROJECT . '" not found');
}

$versions = GitVersionCollection::create($dir)
    //->add('1.0', 'Inphinit 1.0')
    ->add('master', 'Inphinit Dev');

$iterator = Finder::create()
    ->files()
    ->name('*.php')
    ->in($dir);

$sami = new Sami($iterator, array(
    #'theme'                => 'symfony',
    'title'                => 'Inphinit API',
    'versions'             => $versions,
    'build_dir'            => __DIR__ . '/../api',
    'cache_dir'            => __DIR__ . '/../cache',
    #'build_dir'            => __DIR__ . '/api/%version%',
    #'cache_dir'            => __DIR__ . '/cache/%version%',
    'remote_repository'    => new GitHubRemoteRepository('inphinit/framework', dirname($dir)),
    'default_opened_level' => 3,
));

$sami['filter'] = function () {
    return new CustomFilter;
};

return $sami;
