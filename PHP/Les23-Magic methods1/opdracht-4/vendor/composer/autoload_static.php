<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit27bd4fa083ffdd94fbeca3f36a7d6f3c
{
    public static $classMap = array (
        'Animal' => __DIR__ . '/../..' . '/classes/Animal.php',
        'Cat' => __DIR__ . '/../..' . '/classes/Cat.php',
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'Fish' => __DIR__ . '/../..' . '/classes/Fish.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInit27bd4fa083ffdd94fbeca3f36a7d6f3c::$classMap;

        }, null, ClassLoader::class);
    }
}
