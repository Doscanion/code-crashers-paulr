<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit11a12df54f2501c53825d18328130ffb
{
    public static $classMap = array (
        'AppInterface' => __DIR__ . '/../..' . '/classes/AppInterface.php',
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'MainApp' => __DIR__ . '/../..' . '/classes/MainApp.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInit11a12df54f2501c53825d18328130ffb::$classMap;

        }, null, ClassLoader::class);
    }
}