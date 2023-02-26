// TODO: 単体テストを追加
export function getHostName(): string {
  const GITPAGES_URL: string = process.env.GITPAGES_URL || '';
  const LOCAL_URL: string = process.env.LOCAL_URL || '';
  return process.env.NODE_ENV === 'production' ? GITPAGES_URL : LOCAL_URL;
}

// TODO: 単体テストを追加
export function getContentServerHostName(): string {
  const GITPAGES_CONTENT_URL: string = process.env.GITPAGES_CONTENT_URL || '';
  const LOCAL_URL: string = process.env.LOCAL_URL || '';
  return process.env.NODE_ENV === 'production'
    ? GITPAGES_CONTENT_URL
    : LOCAL_URL;
}
