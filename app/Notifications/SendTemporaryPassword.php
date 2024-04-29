<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class SendTemporaryPassword extends Notification
{
    use Queueable;

    public $password;

    public function __construct($password)
    {
        $this->password = $password;
    }

    public function via($notifiable)
    {
        return ['mail'];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->greeting(__("Hello") . " " . $notifiable->name . ",")
            ->subject('Votre mot de passe temporaire')
            ->line('Vous avez été enregistré dans notre système.')
            ->line("Votre mot de passe temporaire est : ")
            ->line("# {$this->password}")
            ->line('Nous vous recommandons de changer ce mot de passe après votre première connexion.');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
