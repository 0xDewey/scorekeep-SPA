@props(['url'])
<tr>
    <td class="header">
        <a href="{{ $url }}" style="display: inline-block;">
            @if (trim($slot) === 'Laravel')
            <img src="https://laravel.com/img/notification-logo.png" class="logo" alt="Laravel Logo">
            @else
            <img src="https://scorekeep.org/logo192.png" class="logo" alt="Scorekeep Logo">
            @endif
        </a>
    </td>
</tr>