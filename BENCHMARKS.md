# Benchmarks

Node.js v24.16; lower is better.

| Benchmark             | This polyfill | signal-polyfill |     Advantage |
| --------------------- | ------------: | --------------: | ------------: |
| State construction    |       6.20 ns |        85.00 ns | 13.71× faster |
| State read            |       2.42 ns |         6.45 ns |  2.67× faster |
| State write           |       3.02 ns |         7.40 ns |  2.45× faster |
| Cached computed read  |       3.38 ns |         6.19 ns |  1.83× faster |
| Computed chain update |      50.05 ns |        79.78 ns |  1.59× faster |
| Diamond update        |      79.74 ns |       118.76 ns |  1.49× faster |
| Rearmed watcher cycle |      61.48 ns |       116.63 ns |  1.90× faster |

## Bundle size

Both implementations processed with identical Terser settings.

| Size            | This polyfill | signal-polyfill |     Reduction |
| --------------- | ------------: | --------------: | ------------: |
| Minified        |       3,096 B |         9,951 B | 68.9% smaller |
| Minified + gzip |       1,268 B |         3,000 B | 57.7% smaller |

## Package size

| npm artifact | Before pass | After pass |     Reduction |
| ------------ | ----------: | ---------: | ------------: |
| Tarball      |    12,102 B |    7,877 B | 34.9% smaller |
| Unpacked     |    49,420 B |   21,445 B | 56.6% smaller |
| File count   |          11 |          7 |   36.4% fewer |
