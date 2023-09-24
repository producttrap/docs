---
title: Getting Started
permalink: /getting-started
---

# Getting Started

## Installation

1. First, you'll need to install ProductTrap via [Composer](https://getcomposer.org).
   ```shell
   composer require producttrap/producttrap
   ```

1. Next, install any relevant [ProductTrap drivers](/drivers).
   ```shell
   # Install the Waitrose driver
   composer require producttrap/driver-waitrose
   ```

## Initial Configuration

All the configuration for ProductTrap is stored in arrays. Each option is documented for each driver, so feel free to
look at the [driver documentation](/drivers).

The ProductTrap manager is bound to the Laravel container and can be retrieved as follows:

```php
// Resolve from container
$this->app->make(\ProductTrap\ProductTrap::class)->find(...);

// Resolve via `app()` helper
app(\ProductTrap\ProductTrap::class)->find(...);

// Resolve via Facade
\ProductTrap\Facades\ProductTrap::find(...);
```

## Usage Examples

All ProductTrap drivers will return either an instance of `ProductTrap\DTOs\Product` or will throw an exception
such as `ParacelTrap\Exceptions\ApiLimitReachedException`.

```php
use ProductTrap\Facades\ProductTrap;

$details = ProductTrap::find('12345');
```

The `Product` object provides access to standardised data:

```php
echo $details->identifier;                   // "12345"
echo $details->status;                       // \ProductTrap\Enums\Status<Status>
echo $details->status->description();        // "Available"
echo $details->name;                         // "Tuna"
echo $details->description;                  // "Delicious Tuna"
```

The `Product` object also provides access to raw (and additional) data from the API.

```php
$data->raw; // array - Raw payload response from the provider
```

The ProductTrap driver may throw exceptions as needed. See the [Handling Exceptions](/guides/handling-exceptions) guide
for more information.

```php
try {
   $details = ProductTrap::find('ABCDEFG');
} catch (\ProductTrap\Exceptions\ApiLimitReachedException $exception) {
   echo $exception->driver;        // Driver<YourSelectedDriver>
   echo $exception->limit;         // 10
   echo $exception->period;        // "minute"
   echo $exception->getMessage();  // "Waitrose API limit reached (10 calls/minute)"
} catch (\ProductTrap\Exceptions\ApiAuthenticationFailedException $exception) {
   echo $exception->driver;        // Driver<YourSelectedDriver>
   echo $exception->getMessage();  // "Failed to authenticate connection with Waitrose"
} catch (\Throwable $throwable) {
   // Something else went wrong
}
```
