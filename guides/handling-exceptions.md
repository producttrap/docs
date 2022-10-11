# Handling Exceptions

All ProductTrap exceptions implement the `ProductTrap\Contracts\ProductTrapException` interface, so you can catch all of
them with:

```php
try {
   $details = ProductTrap::find('ABCDEFG');
} catch (\ProductTrap\Contracts\ProductTrapException $exception) {
}
```

All ProductTrap Driver exceptions extend the `ProductTrap\Exceptions\ProductTrapDriverException` class, so you can catch
all of them with:

```php
try {
   $details = ProductTrap::find('ABCDEFG');
} catch (\ProductTrap\Exceptions\ProductTrapDriverException $exception) {
   echo $exception->driver;  // Driver<YourSelectedDriver>
}
```
