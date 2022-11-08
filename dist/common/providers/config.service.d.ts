import { ConfigService as NestConfig, Path, PathValue } from '@nestjs/config';
import type { Config } from '../../config';
export declare class ConfigService<K = Config> extends NestConfig<K> {
    get<P extends Path<K>>(path: P): PathValue<K, P>;
}
